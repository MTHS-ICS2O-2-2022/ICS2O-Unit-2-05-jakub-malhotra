// Created by: Jakub Malhotra
// Created on: May 2023
//
// This program calculates fahrenheit to celsius

package main

import "fmt"

func main() {
	// This program calculates wage and tax
	var hours int
	var wage int
	var gross int
	var tax int

	fmt.Println("This program calculates wage and tax.")
	fmt.Println()
	fmt.Print("Enter hours worked: ")
	fmt.Scanln(&hours)
	fmt.Print("Enter your hourly wage: ")
	fmt.Scanln(&wage)

	gross = hours * wage
	tax = hours * wage * 18 / 100

	fmt.Println()
	fmt.Println("The gross income is:", gross)
	fmt.Println("The government takes:", tax)
	fmt.Println("\nDone.")
}
