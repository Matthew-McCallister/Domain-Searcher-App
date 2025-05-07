import React from 'react';

interface DomainCardProps {
    domain: string;
    available: boolean;
    onSelect: (domain: string) => void;
}

const DomainCard: React.FC<DomainCardProps> = ({ domain, available, onSelect }) => {
    return (
        <div className="domain-card" onClick={() => onSelect(domain)}>
            <h3>{domain}</h3>
            <p>{available ? 'Available' : 'Not Available'}</p>
            <button disabled={!available}>Select</button>
        </div>
    );
};

export default DomainCard;