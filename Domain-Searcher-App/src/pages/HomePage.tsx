import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const HomePage: React.FC = () => {
    const [results, setResults] = useState<string[]>([]);

    const handleSearch = (query: string) => {
        // Placeholder for search logic
        // This function would typically call an API to fetch domain results based on the query
        // For now, we'll simulate results
        const simulatedResults = ['example.com', 'testdomain.com', 'mywebsite.org'];
        setResults(simulatedResults);
    };

    return (
        <div>
            <h1>Domain Searcher</h1>
            <SearchBar onSearch={handleSearch} />
            <ResultsList results={results} />
        </div>
    );
};

export default HomePage;