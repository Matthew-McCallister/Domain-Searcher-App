import React from 'react';
import DomainCard from './DomainCard';

interface ResultsListProps {
  results: Array<{
    domain: string;
    available: boolean;
  }>;
}

const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  return (
    <div className="results-list">
      {results.length > 0 ? (
        results.map((result, index) => (
          <DomainCard key={index} domain={result.domain} available={result.available} />
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default ResultsList;