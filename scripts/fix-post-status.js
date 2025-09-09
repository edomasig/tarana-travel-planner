const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fixPostStatus() {
  console.log('Fixing blog post status...');

  // Update all published posts to have PUBLISHED status
  const updatedPosts = await prisma.blogPost.updateMany({
    where: {
      published: true,
      status: 'DRAFT'
    },
    data: {
      status: 'PUBLISHED'
    }
  });

  console.log(`Updated ${updatedPosts.count} posts from DRAFT to PUBLISHED status`);

  // Show current status of all posts
  const allPosts = await prisma.blogPost.findMany({
    select: {
      title: true,
      status: true,
      published: true
    }
  });

  console.log('\nCurrent post statuses:');
  allPosts.forEach(post => {
    console.log(`- ${post.title}: Status=${post.status}, Published=${post.published}`);
  });

  await prisma.$disconnect();
}

fixPostStatus().catch(console.error);
