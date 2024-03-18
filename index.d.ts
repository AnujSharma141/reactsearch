import React from 'react';

interface PropTypes {
    maximum?: number;
    placeholder?: string;
    select?: (item: any) => void;
    threshold? : number; 
    data: unknown[]
}

declare function Search(props: PropTypes): React.ReactElement<unknown>;

export default Search;