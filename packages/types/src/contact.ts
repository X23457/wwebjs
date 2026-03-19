/** A business category */
export interface BusinessCategory {
  id: string;
  localized_display_name: string;
}

/** Business hours for a single day */
export interface BusinessHoursOfDay {
  mode: string;
  hours: number[];
}

/** Business hours configuration */
export interface BusinessHours {
  config: {
    sun: BusinessHoursOfDay;
    mon: BusinessHoursOfDay;
    tue: BusinessHoursOfDay;
    wed: BusinessHoursOfDay;
    thu: BusinessHoursOfDay;
    fri: BusinessHoursOfDay;
  };
  timezone: string;
}
