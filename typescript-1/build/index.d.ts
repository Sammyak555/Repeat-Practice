declare let a: number;
declare let done: boolean;
declare let first_name: string;
declare let last_name: string;
type data = {
    id: number;
    name: string;
};
declare const printing: ({ id, name }: data) => void;
declare let gender: 'male' | 'female' | 'trans';
