import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 } from "uuid";

const S3 = new S3Client({
  endpoint:
    "https://8a7234f45428541aac34fcde89695061.r2.cloudflarestorage.com/carrental",
  credentials: {
    accessKeyId: "fbac5c2473051beaaa26b97468974f22",
    secretAccessKey:
      "1fa64fb46ad6008cc7cf94a06b08f3473c5b92286894b93b8614cdefe4093c30",
  },
  region: "auto",
});

export async function GET(req) {
  const count = req.nextUrl.searchParams.get("count");



  const keys = Array.from({ length: Number(count) }, () => v4());

  const urls = keys.map(async (id) => {
    const presignedURL = await getSignedUrl(
      S3,
      new PutObjectCommand({
        Bucket: "carrental",
        Key: id,
      })
    );

    return presignedURL;
  });

  const response = await Promise.all(urls);

  return Response.json({
    uploadUrl: response,
    accessUrls: keys.map(
      (key) =>
        "https://pub-9e4a462638ff4a6e89664b9e0dd86ca5.r2.dev/carrental%2F" +
        key
    ),
  });
}
