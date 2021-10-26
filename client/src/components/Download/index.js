import React, {useEffect} from 'react'

const Download = () => {

    useEffect(() => {
        if (isAndroid) {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.ubercab&hl=en_US&gl=US";
        }else if(isIOS) {
          window.location.href =
            "https://apps.apple.com/us/app/uber-request-a-ride/id368677368";
        } else{
          window.location.href =
            "https://www.uber.com/global/en/cities/raleigh/";
        }
      }, []);


    return (
        <div>
            
        </div>
    )
}

export default Download;
