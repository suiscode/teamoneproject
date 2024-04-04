import { Button } from '@/components/ui/button'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'
 
 
function ButtonAuth() {
    return (
        <div className='space-y-4 flex items-center flex-col'>
            <h1 className="text-xl">or</h1>
            <Button className="w-[250px] flex gap-2"><GoogleIcon />Google</Button>
            <Button className="w-[250px] flex gap-2"><GitHubIcon />GitHub</Button>
        </div>
    )
}
 
export default ButtonAuth