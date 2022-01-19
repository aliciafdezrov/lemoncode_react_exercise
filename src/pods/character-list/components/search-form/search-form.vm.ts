type Status = "Alive" | "Dead" | "Unknown" | "";
type Gender = "Female" | "Male" | "Genderless" | "Unknown" | "";

export interface SearchTerm {
    name: string;
    specie: string;
    type: string;
    status: Status;
    gender: Gender;
}

export const createInitialSearchTerm = (): SearchTerm => ({
    name: '', specie: '', type: '', status: '', gender: ''
});
