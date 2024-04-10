import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static validateStartDate(control: AbstractControl): ValidationErrors | null {
    const birthDateControl = control.root.get('birthDate');
    // בדיקה אם אין את הבקרה של תאריך הלידה או שהערך הוא null
    if (!birthDateControl || birthDateControl.value === null) {
      return null; // אין בעיה אם נתאריך הלידה לא קיים או הוא null
    }
  
    const birthDate = new Date(birthDateControl.value);
    const startDate = new Date(control.value);
    const minStartDate = new Date(birthDate);
    minStartDate.setFullYear(birthDate.getFullYear() + 18); // הוספת 18 שנים לתאריך הלידה
  
    // בדיקה אם תאריך ההתחלה קטן מתאריך ההתחלה המינימלי
    if (startDate < minStartDate) {
      return { 'startDateTooEarly': true }; // החזרת אובייקט של ValidationErrors במקרה של שגיאה
    }
    
    return null; // אין שגיאה, התאריך תקין
  }


  static validateBirthDate(control: AbstractControl): ValidationErrors | null {
    const startDateControl = control.root.get('startDate');
    if (!startDateControl || startDateControl.value === null) {
      return null; // אין בעיה אם נתאריך ההתחלה לא קיים או הוא null
    }

    if (startDateControl && startDateControl.value !== null) {
      // בדיקת תאריך לידה:
      const birthDate = new Date(control.value);
      const startDate = new Date(startDateControl.value);
      const maxBirthDate = new Date(startDate);
      maxBirthDate.setFullYear(startDate.getFullYear() - 18);

      if (birthDate > maxBirthDate) {
        return { 'birthDateTooLate': true };
      }
    }

    return null;
  }
}