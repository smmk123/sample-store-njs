import axios from 'axios';
import { NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(req: Request) {
  const data = await req.json();
  const { endpoint, method, body, params = {}, headers = {} } = data;
  
  try {
    const url = `${BASE_URL}${endpoint}`;
    const response = await axios.request({
      url,
      method,
      data: body,
      headers:{...headers},
      params: {...params}
    });
    return NextResponse.json(response.data);
  } catch (error:any) {
    return NextResponse.json({ message: error.message });
  }
}
