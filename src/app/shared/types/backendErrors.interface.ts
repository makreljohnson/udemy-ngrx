export interface BackendErrorsInterface {
	[key: string]: string[];
}

/* NOTE: [key: string]: string[]; behaves like a template where
* keys are string such as form field names and the values
* are arrays of strings*/
