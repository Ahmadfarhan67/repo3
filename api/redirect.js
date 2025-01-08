export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.ubuy.com.pk/en/productin/LUF3D2OAI-the-modern-soul-stripe-self-design-oversized-tshirt-for-men-oversize-t-shirts-for-men-men-drop-shoulder-tshirts-bagy-fit-mens-tshirt?srsltid=AfmBOoprVlk0Cx5Nm3aDD5AYfQiBoS2XlWcOiK8ENH8PQcLVCph1gzE9";
    const blackPageURL = "https://ifrxjwhbvb.myfunnelish.com/imbassd-1735569734063202";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }
