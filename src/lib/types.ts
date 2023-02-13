export interface phoneType {
	phone_id: number;
	student_id: number;
	phone: string;
	label?: null | string;
}

export interface scannerCardType {
	id: number;
	card_number: number;
	student_id: number;
}

export interface studentType {
	id: number;
	first_name?: string;
	last_name?: string;
	email?: string;
	active?: boolean;
	address?: string;
	city?: string;
	zip?: string;
	dob: string;
	grade?: string;
	notes?: string;
	phones?: phoneType[];
	scanner_cards?: scannerCardType[];
}
