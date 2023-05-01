
  import { jsPDF } from "jspdf";
  import type { selectedItem } from "./types";

// Your interfaces here
// ...
export function downloadDataAsPDF(selectedItems: selectedItem[]): void {
  const doc = new jsPDF();

  // Set the background color
  doc.setFillColor(255, 248, 229); // RGB value of FFF8E5
  doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), "F");

  let yOffset = 10;
  const lineHeight = 8;

  let overallTotalCalories = 0;

  selectedItems.forEach((selectedItem) => {
    const { category, item } = selectedItem;

    const mealTimeTotalCalories = item.reduce((acc, foodItem) => acc + foodItem.Calories, 0);
    overallTotalCalories += mealTimeTotalCalories;

    doc.setFontSize(16);
    doc.text(`${category} (Total Calories: ${mealTimeTotalCalories})`, 10, yOffset);
    yOffset += lineHeight;

    // Get unique categories for the current meal time
    const categories = Array.from(
      new Set(item.map((foodItem) => foodItem.Category))
    );

    categories.forEach((category) => {
      doc.setFontSize(14);
      doc.text(`Category: ${category}`, 20, yOffset);
      yOffset += lineHeight;

      item
        .filter((foodItem) => foodItem.Category === category)
        .forEach((foodItem) => {
          doc.setFontSize(12);
          doc.text(`${foodItem.food_items}`, 30, yOffset);
          yOffset += lineHeight;
        });

      yOffset += lineHeight;
    });

    yOffset += lineHeight;
  });

  // Print overall total calories
  doc.setFontSize(16);
  doc.text(`Total Calories: ${overallTotalCalories}`, 10, yOffset);

  // Save the PDF
  doc.save("food-data.pdf");
}

