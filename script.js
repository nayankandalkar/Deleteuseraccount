// script.js 

let icon = { 
	success: 
    '<span class="material-symbols-outlined">task_alt</span>', 
    danger: 
    '<span class="material-symbols-outlined">error</span>', 
    warning: 
    '<span class="material-symbols-outlined">warning</span>', 
    info: 
    '<span class="material-symbols-outlined">info</span>'
	 
}; 

 


const showToast = ( 
    

	message = "Sample Message", 
	toastType = "info", 
	duration = 5000) => { 


        const loader=document.getElementById("spinner");
loader.classList +="spinner"

	if ( 
		!Object.keys(icon).includes(toastType)) 
		toastType = "info"; 

	let box = document.createElement("div"); 
	box.classList.add( 
		"toast", `toast-${toastType}`); 
	box.innerHTML = ` <div class="toast-content-wrapper"> 
					<div class="toast-icon"> 
					${icon[toastType]} 
					</div> 
					<div class="toast-message">${message}</div> 
					<div class="toast-progress"></div> 
					</div>`; 
	duration = duration || 5000; 
	box.querySelector(".toast-progress").style.animationDuration = 
			`${duration / 1000}s`; 

            
 


	let toastAlready = 
		document.body.querySelector(".toast"); 
	if (toastAlready) { 
		toastAlready.remove(); 
	} 

	document.body.appendChild(box)}; 

let submit = 
	document.querySelector(".custom-toast.success-toast"); 
 

submit.addEventListener("click",(e) => { 
		e.preventDefault(); 




        console.log("how are you ");

        const url = 'https://servixoindia.com/servixoindia/api/delete_user_request';
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODhkYWYwZDhlZTA2OTM2NjMzNGJmY2UzMTVjYmM2ODk4YmNlYjQ3NzBkYzBhNWE2ZTA5OGQyODZkM2U5YzhmNzMyNzVlNzgzOTAyNmViZDYiLCJpYXQiOjE3MTA2OTk2MDEuOTM0MDIyLCJuYmYiOjE3MTA2OTk2MDEuOTM0MDI1LCJleHAiOjE3NDIyMzU2MDEuOTMyOTE1LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.cOTXCRa2Nk1a37-h8rYn1PQLAN4DqC3Unq_X4l6Iin0NeynWM2Nmlx5JKl6XcZ2PVFOutBB8K4GZHIeKLI6uWOn3U0snqa_Bms4OpqYMVckz7_v6qBmypsFuQn6o8n2P1Dj2ETVnjVfCGK2gDBWDeL88jIKxRK7lw2ftIblTBmSWl6-18iVc2T3RYMhr-EikHkHjm4XoYO8jWFEqg2i3Wdnb1TQ_JmFwvpToyThMlYDgkTuMQjamPnmeVopDHek4T8snhNW4N1AcdnOBrQxIqR1XOnaE5m6HWfe-RYSGpBBFOhPkYuihtEXtBcW83i7gFfh2QOwlLzAbhBjuYPRosAWeBL_RHNPbHstfP-suaYhwpfPYkSPZu_WO-qA3eZRTXoIXH5vi4MiPPOubsRwT4ymMIKec0lJEqk-DEUlfiwJXLyJx7eGCSRlCA1DV41BPNVSLdXbjGNxdqbwEPSW6Rbkv14Zy1A1hFK8YzE_42pce4mDWSDCJi3xdruzXeurm8LYjxxZjhOf6kFJWqRLCN6ISjXNTi3sxLW4fbw_kEIPFs7mDBtklFazb3cyP_jzdYso-XvhXDo9iGnEdHFAAdxrKxeUP13J0py9o5RvJ3Q6Og9xywAux3dfC2CVD21VlP9cHu2q4JBZDyVTDlhRQEGSr96BgUf_U2JgFNavdlLQ';
    
    let number;
    
      
        let phone=document.getElementById("phone");
        number=phone.value
        console.log(number );
    
    
    
    
    
      
    
    
      const requestData = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' // Adjust content type as needed
      },
      body: JSON.stringify({
         'phone' :`${number}`
      })
    };
    
     
    
        
        console.log("ok ok ")
    fetch(url, requestData)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle response data
        console.log(data);
    
        if(data.message =="User delete request accepted"){

             showToast("user Account is deleted sucessfully we will send you confirmation email  shortly","success",5000);
            // loader.classList -="spinner"
            const loader=document.getElementById("spinner");
            loader.classList.remove("spinner")
        }else{
            showToast("user does not found please enter valid detail","danger",5000);
         const loader=document.getElementById("spinner");
         loader.classList.remove("spinner")
        }
    
      })
      .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
      });
    

    




		  
	}); 
 