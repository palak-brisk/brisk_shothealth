import { useEffect, useState } from 'react';
import { fetchWrapper } from '../utils/api';

export default function ApiTest() {
  const [dbTest, setDbTest] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const testDbConnection = async () => {
      setLoading(true);
      try {
        const result = await fetchWrapper('/test-db');
        setDbTest(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    testDbConnection();
  }, []);

  return (
    <div>
      <h1>API Test Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(dbTest, null, 2)}</pre>
      )}
    </div>
  );
}