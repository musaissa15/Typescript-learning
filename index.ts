function humanYearsCatYearsDogYears(
	humanYears: number
): [number, number, number] {
	// Your code here!
	let dogYears: number = 0
	let catYears: number = 0
	
	


	if (humanYears === 1) {
		dogYears += 15;
		catYears += 15
	} else if (humanYears === 2) {
		dogYears += 24;
		catYears += 24;
	} else if (humanYears >= 3) {
	dogYears += (humanYears - 2) * 4 + 24 
	catYears += (humanYears - 2) * 5 + 24 

}

	return [humanYears, dogYears, catYears];
	
}
humanYearsCatYearsDogYears(10);
/** 
 * !Kata Task
*TODOS I have a cat and a dog.

*TODOS I got them at the same time as kitten/puppy. That was humanYears years ago.

*TODOS Return their respective ages now as [humanYears,catYears,dogYears]

* !NOTES:

*TODOS humanYears >= 1
*TODOS humanYears are whole numbers only
* !Cat Years
*TODOS 15 cat years for first year
*TODOS +9 cat years for second year
*TODOS +4 cat years for each year after that
* !Dog Years
*TODOS 15 dog years for first year
*TODOS +9 dog years for second year
*TODOS +5 dog years for each year after that
 * 
*/
