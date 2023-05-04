import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  // API Route 이메일 전송 요청 보내기
  const response = await fetch( '/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'applicatrion/json',
    }
  })

  const data = await response.json()
  if(!response.ok){
    throw new Error( data.message || '서버 요청 실패')
  }
  
  return data
}