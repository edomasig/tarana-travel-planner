import SessionDebugger from '@/components/session-debugger'

export default function CMSDebugPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            CMS Authentication Debug
          </h1>
          <p className="text-gray-600">
            Use this page to check authentication status and troubleshoot login issues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SessionDebugger />
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-2">Troubleshooting Steps</h3>
              <ol className="text-sm space-y-2 list-decimal list-inside">
                <li>Check if you see "authenticated" status on the left</li>
                <li>If "loading" persists, refresh the page</li>
                <li>If "unauthenticated", you should be redirected to login</li>
                <li>Try clearing browser cookies and login again</li>
                <li>Check if admin credentials are correct</li>
              </ol>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-2">Admin Credentials</h3>
              <div className="text-sm space-y-1">
                <p><strong>Development:</strong></p>
                <p>Email: admin@tarana.ph</p>
                <p>Password: TaranaCMS2024!</p>
                <p className="text-xs text-gray-500 mt-2">
                  (Production uses different credentials)
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-2">Session Configuration</h3>
              <div className="text-xs space-y-1 text-gray-600">
                <p>• Session Duration: 24 hours</p>
                <p>• Auto-refresh: Every 1 hour</p>
                <p>• Strategy: JWT tokens</p>
                <p>• Protection: All /cms/* routes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Session Issues Fixed</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>✅ Added missing CMS admin credentials</li>
            <li>✅ Configured session timeout (24 hours)</li>
            <li>✅ Added authentication wrapper for CMS pages</li>
            <li>✅ Improved middleware protection</li>
            <li>✅ Added JWT token expiration</li>
          </ul>
        </div>
      </div>
    </div>
  )
}