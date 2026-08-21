import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, region, product, service, message, notes, pageUrl } = body;

    const payload = {
      timestamp: new Date().toISOString(),
      name: name || '',
      email: email || '',
      phone: phone || '',
      region: region || '',
      productOrService: product || service || 'General Enquiry',
      message: message || notes || '',
      pageUrl: pageUrl || '',
    };

    // Google Sheets Webhook URL from environment variables or fallback
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (googleSheetWebhookUrl) {
      const response = await fetch(googleSheetWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error('Google Sheet Webhook response error:', response.statusText);
      }
    } else {
      console.log('Google Sheet Webhook URL not configured. Payload received:', payload);
    }

    return NextResponse.json({ success: true, message: 'Quote request submitted successfully' });
  } catch (error: any) {
    console.error('Error submitting quote request:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
