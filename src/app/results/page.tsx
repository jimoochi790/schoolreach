import { Suspense } from 'react';
import ResultsContent from './results-content';

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-3xl mx-auto px-4 py-12 text-center text-muted-foreground">
          Loading results...
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
