'use client'

export default function FacebookTestPage() {
  const testActions = [
    {
      name: 'Publish New Post',
      action: 'publish',
      description: 'Create a new Facebook post for a blog article'
    },
    {
      name: 'Repost Content',
      action: 'repost', 
      description: 'Delete old post and create new one with updated content'
    },
    {
      name: 'Delete Post',
      action: 'delete',
      description: 'Remove Facebook post and clear database references'
    }
  ]

  const handleTestAction = async (action: string) => {
    try {
      // You'll need to replace this with an actual blog post ID from your database
      const testPostId = 'your-blog-post-id-here'
      
      const response = await fetch('/api/test/facebook-actions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId: testPostId,
          action: action
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        alert(`✅ ${action.toUpperCase()} action completed successfully!\n\nDetails: ${JSON.stringify(result, null, 2)}`)
      } else {
        alert(`❌ ${action.toUpperCase()} action failed!\n\nError: ${result.error || 'Unknown error'}`)
      }
    } catch (error) {
      alert(`❌ Network error: ${error}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🔄 Facebook Repost Functionality Test
          </h1>
          
          <p className="text-gray-600 mb-8">
            Test the new Facebook posting actions: publish, repost, and delete functionality.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> Before testing, make sure you have:
                  <br />• A valid blog post ID in your database
                  <br />• Facebook API credentials configured
                  <br />• Update the <code>testPostId</code> variable below
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {testActions.map((test) => (
              <div key={test.action} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {test.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {test.description}
                </p>
                <button
                  onClick={() => handleTestAction(test.action)}
                  className={`px-4 py-2 rounded-md font-medium text-white transition-colors ${
                    test.action === 'delete' 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : test.action === 'repost'
                      ? 'bg-orange-600 hover:bg-orange-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Test {test.name}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">How it works:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Publish:</strong> Creates new Facebook post or returns existing one</li>
              <li>• <strong>Repost:</strong> Deletes old Facebook post, creates new one with updated content</li>
              <li>• <strong>Delete:</strong> Removes Facebook post and clears database references</li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <a 
              href="/api/test/facebook-actions" 
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              View API Documentation →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
