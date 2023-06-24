"use client";
import {useEffect} from 'react'

export default function OnBoardMenu() {
   useEffect(()=> {
      const onBoardingMenu = document.getElementById("onboarding-menu") as HTMLDialogElement;
      onBoardingMenu.showModal()
   }, [])
   
	return (
		<dialog 
         onKeyDownCapture={(e)=> {e.preventDefault()}}
         id="onboarding-menu" 
         className="modal">
			<form method="dialog" className="modal-box">
				<h3 className="text-lg font-bold">Hello!</h3>
				<p className="py-4">Press ESC key or click the button below to close</p>
				<div className="modal-action">
					<button className="btn">Close</button>
				</div>
			</form>
		</dialog>
	)
}
