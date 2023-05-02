
  import { jsPDF } from "jspdf";
  import autoTable from 'jspdf-autotable'

  import type { FoodItem, selectedItem } from "./types";

// Your interfaces here
// ...
export function downloadDataAsPDF(selectedItems: selectedItem[]): void {
  const doc = new jsPDF();
  let startY = 20;

  selectedItems.forEach((selectedItem) => {
    // Add meal time as a title
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(selectedItem.category, 10, startY);
    startY += 10;

    // Group items by category
    const groupedItems = selectedItem.item.reduce((acc, item) => {
      if (!acc[item.Category]) {
        acc[item.Category] = [];
      }
      acc[item.Category].push(item);
      return acc;
    }, {} as { [key: string]: FoodItem[] });

    // Iterate through each category and create a table
    for (const category in groupedItems) {
      const items = groupedItems[category];

      // Set table column headers
      const headers = ['Food Item', 'Avg Serving Size', 'Calories', 'Protein', 'Fats', 'Carbs'];

      // Prepare table data
      const data: string[][] = items.map((item) => [
        item.food_items,
        item.Avg_Serving_Size.toString(),
        item.Calories.toString(),
        item.Protein.toString(),
        item.Total_Fat.toString(),
        item.Carbs.toString(),
      ]);

      // Add category name as a subtitle
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(category, 10, startY);
      startY += 7;

      // Draw the table on the PDF
      autoTable(doc,{
        head: [headers],
        body: data,
        startY: startY,
        styles: { cellWidth: 'auto', halign: 'right' },
        headStyles: { fillColor: [186, 104, 200] }, // Use primary color for header background
        bodyStyles: { fillColor: [255, 248, 229] }, // Use secondary color for row background
        columnStyles: {
          0: { halign: 'left' }, // Align the food item names to the left
        },
      });

      // Update startY to the next table's starting position
      startY = (doc as any).autoTable.previous.finalY + 10;
    }

    // Add space between meal times
    startY += 10;
  });

  // Save the PDF
  doc.save('DietPlan.pdf');
}


export const createPdf = (foodItems: FoodItem[]) => {
  const doc = new jsPDF();

  // Set table column headers
  const headers = ['Food Item', 'Avg Serving Size', 'Calories', 'Protein', 'Fats', 'Carbs'];

  // Prepare table data
  const data: string[][] = foodItems.map((item) => [
    item.food_items,
    item.Avg_Serving_Size.toString(),
    item.Calories.toString(),
    item.Protein.toString(),
    item.Total_Fat.toString(),
    item.Carbs.toString(),
  ]);

  // Calculate totals for each column
  let totals = [0, 0, 0, 0, 0];
  foodItems.forEach((item) => {
    totals[0] += item.Avg_Serving_Size;
    totals[1] += item.Calories;
    totals[2] += item.Protein;
    totals[3] += item.Total_Fat;
    totals[4] += item.Carbs;
  });

  // Add the total row to the table data
  data.push(['Total', ...totals.map((total) => total.toFixed(2))]);

  // Draw the table on the PDF
  autoTable(doc,{
    head: [headers],
    body: data,
    startY: 20,
    styles: { cellWidth: 'auto', halign: 'left' },
    headStyles: { fillColor: [186, 104, 200] }, // Use primary color for header background
    bodyStyles: { fillColor: [255, 248, 229] }, // Use secondary color for row background
  });

  // Save the PDF
  doc.save('FoodItems.pdf');

};



