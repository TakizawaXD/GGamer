// IMPORTANT: Create a '.env' file in the root of your project and add the following line:
// DISCORD_BOT_API_KEY='your-secret-api-key'
// Replace 'your-secret-api-key' with a secure, randomly generated key.
// This same key must be used by your Discord bot in the 'Authorization' header.

import { NextResponse } from 'next/server';
import type { DiscordPostPayload } from '@/lib/types';
import { leaderboard } from '@/lib/data';

// This is a placeholder function. In a real-world scenario, you would
// save the post to a database like Firestore.
async function savePostToDatabase(post: DiscordPostPayload): Promise<void> {
  console.log('Received new post. In a real app, this would be saved to a database.');
  // For demonstration, we'll check if the user exists in our mock data and log it.
  const userExists = leaderboard.some(player => player.name === post.author.name);
  if (userExists) {
    console.log(`Author "${post.author.name}" exists in the leaderboard.`);
  } else {
    console.log(`Author "${post.author.name}" not found in leaderboard. Consider adding them.`);
  }
}

export async function POST(request: Request) {
  const apiKey = request.headers.get('Authorization');

  // 1. Authenticate the request
  if (apiKey !== `Bearer ${process.env.DISCORD_BOT_API_KEY}`) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // 2. Validate the request body
  let postData: DiscordPostPayload;
  try {
    postData = await request.json();
    if (!postData.author || !postData.content || !postData.timestamp) {
        throw new Error('Missing required fields');
    }
  } catch (error) {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }
  
  // 3. Process and "store" the data
  try {
    await savePostToDatabase(postData);
    return NextResponse.json({ message: 'Post received' }, { status: 201 });
  } catch (error) {
    console.error('Error saving post:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
