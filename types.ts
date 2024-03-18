export interface PropTypes {
    maximum?: number;
    placeholder?: string;
    select?: (item: any) => void;
    threshold? : number; 
    data: unknown[]
}

export interface ResultType {
    item: string
}