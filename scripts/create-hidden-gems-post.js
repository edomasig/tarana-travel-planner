const { PrismaClient } = require('@prisma/client');

async function createHiddenGemsPost() {
  const prisma = new PrismaClient();

  try {
    // Check if post already exists
    const existingPost = await prisma.blogPost.findFirst({
      where: { slug: 'hidden-gems-northern-philippines' }
    });

    if (existingPost) {
      console.log('Post already exists with ID:', existingPost.id);
      console.log('You can edit it at: http://localhost:3000/cms/blog-posts/' + existingPost.id + '/edit');
      return;
    }

    // Create the blog post
    const post = await prisma.blogPost.create({
      data: {
        title: 'Hidden Gems of Northern Philippines: Beyond Baguio and Sagada',
        slug: 'hidden-gems-northern-philippines',
        content: `
          <div class="space-y-6">
            <p class="text-lg text-gray-700 leading-relaxed">
              While Baguio and Sagada draw thousands of visitors annually, Northern Philippines harbors countless hidden treasures waiting to be discovered. From pristine mountain lakes to ancient rice terraces and untouched beaches, this region offers authentic Filipino experiences away from the crowds.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Kapurpurawan Rock Formation, Ilocos Norte</h2>
            <p class="text-gray-700 leading-relaxed">
              This stunning white limestone formation juts dramatically from the coastline, creating a moonscape-like terrain that's perfect for photography. The contrast between the white rocks and blue ocean creates one of the most striking landscapes in the Philippines.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Bantay Abot Cave, Ilocos Norte</h2>
            <p class="text-gray-700 leading-relaxed">
              A natural arch cave formation that frames the ocean perfectly. During sunset, the view through the cave opening creates magical silhouettes and golden hour photography opportunities.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Maira-ira Beach, Pagudpud</h2>
            <p class="text-gray-700 leading-relaxed">
              Often called the "Boracay of the North," this beach offers powdery white sand and crystal-clear waters without the crowds. Perfect for those seeking a peaceful beach experience with dramatic mountain backdrops.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Patapat Viaduct</h2>
            <p class="text-gray-700 leading-relaxed">
              The fourth longest bridge in the Philippines offers breathtaking coastal views as it winds along the mountainside. The drive itself is an adventure, with panoramic ocean vistas at every turn.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Bangui Windmills</h2>
            <p class="text-gray-700 leading-relaxed">
              These towering wind turbines along the coastline create a surreal landscape that feels almost otherworldly. Best visited during golden hour when the white turbines contrast beautifully against the colorful sky.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Planning Your Hidden Gems Adventure</h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-700">
              <li>Best time to visit: November to April for dry weather</li>
              <li>Transportation: Rent a car or motorcycle for maximum flexibility</li>
              <li>Accommodation: Stay in local guesthouses for authentic experiences</li>
              <li>Budget: ₱3,000-5,000 per day for budget travelers</li>
              <li>Duration: 5-7 days to explore all locations comfortably</li>
            </ul>

            <div class="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-3">Pro Travel Tips</h3>
              <ul class="space-y-2 text-blue-800">
                <li>• Book accommodations in advance during peak season</li>
                <li>• Bring cash as ATMs are scarce in remote areas</li>
                <li>• Pack layers - mountain weather can change quickly</li>
                <li>• Respect local customs and environmental guidelines</li>
                <li>• Consider hiring local guides for hidden spots</li>
              </ul>
            </div>
          </div>
        `,
        excerpt: 'Discover Northern Philippines\' best-kept secrets beyond the popular destinations of Baguio and Sagada. From white limestone formations to pristine beaches and dramatic coastal drives.',
        featuredImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        metaTitle: 'Hidden Gems of Northern Philippines: Beyond Baguio and Sagada | GalaGPT Travel',
        metaDescription: 'Explore Northern Philippines\' hidden treasures including Kapurpurawan Rock Formation, Bantay Abot Cave, and pristine beaches away from the crowds.',
        status: 'PUBLISHED',
        published: true,
        featured: true,
        author: 'Maria Santos',
        publishedAt: new Date('2025-01-15'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    console.log('Blog post created successfully!');
    console.log('Post ID:', post.id);
    console.log('Edit URL: http://localhost:3000/cms/blog-posts/' + post.id + '/edit');
    console.log('View URL: http://localhost:3000/blog/hidden-gems-northern-philippines');

  } catch (error) {
    console.error('Error creating blog post:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createHiddenGemsPost();
