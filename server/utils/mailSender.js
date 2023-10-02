const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                port:587,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })
            const mailOptions = {
                from: 'ujjuwalia15@gmail.com',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            }

            let info = await transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log(error);
                }
                else{
                    console.log("Email Sent" , info.response);
                }
            })
                
            
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;