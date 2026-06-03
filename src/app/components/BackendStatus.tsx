import { useEffect, useState } from 'react';

export function BackendStatus() {
  const [healthStatus, setHealthStatus] = useState<string>('Loading...');
  const [dbData, setDbData] = useState<any[] | null>(null);
  const [dbError, setDbError] = useState<string | null>(null);

  useEffect(() => {
    // Check backend health
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setHealthStatus(data.status === 'ok' ? 'Connected \u2705' : 'Error \u274c'))
      .catch((err) => setHealthStatus('Disconnected \u274c'));

    // Check Supabase DB connection
    fetch('/api/test-db')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch DB data');
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        setDbData(data);
      })
      .catch((err) => setDbError(err.message));
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-[100] max-w-sm text-sm">
      <h3 className="font-bold text-gray-800 mb-2">System Status</h3>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Backend API:</span>
        <span className="font-medium">{healthStatus}</span>
      </div>
      <div>
        <span className="text-gray-600 mb-1 block">Supabase Data:</span>
        {dbError ? (
          <div className="text-red-500 bg-red-50 p-2 rounded text-xs">{dbError}</div>
        ) : dbData ? (
          <div className="bg-gray-50 p-2 rounded overflow-auto max-h-32 text-xs text-gray-700">
            {dbData.length === 0 ? 'Connected to Supabase! However, the table is empty (0 rows). If you added data, check if Row Level Security (RLS) is blocking reads.' : (
              <pre>{JSON.stringify(dbData, null, 2)}</pre>
            )}
          </div>
        ) : (
          <div className="text-gray-400 text-xs">Loading database...</div>
        )}
      </div>
    </div>
  );
}
