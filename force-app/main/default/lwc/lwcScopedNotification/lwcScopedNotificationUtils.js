// @ts-check

/**
 * @description validates type
 * @param {String} input
 * @returns {String}
 */
export function validateType(input) {
  const VALID_TYPES = ["base", "informational", "success", "warning", "error"];
  if (!input || typeof input !== "string" || !VALID_TYPES.includes(input)) {
    return VALID_TYPES[0];
  }
  return input;
}

/**
 * @description computes parent container classes
 * @param {String} type 
 * @returns {String}
 */
export function computeClasses(type = "base") {
  const baseClasses = [
    "slds-scoped-notification", "slds-media", "slds-media_center",
  ];

  switch (type) {
    case "base":
      baseClasses.push("slds-scoped-notification_light");
      break;
    case "informational":
      baseClasses.push("slds-scoped-notification_dark");
      break;
    case "success":
      baseClasses.push("slds-theme_success");
      break;
    case "warning":
      baseClasses.push("slds-theme_warning");
      break;
    case "error":
      baseClasses.push("slds-theme_error");
    default:
      break;
  }

  return baseClasses.join(" ");
}

/**
 * @description computes icon name based on type
 * @param {String} type 
 * @returns {String}
 */
export function computeIconName(type = "base") {
  switch (type) {
    case "success":
      return "utility:success";
    case "warning":
      return "utility:warning";
    case "error":
      return "utility:error";
    case "base":
    case "informational":
    default:
      return "utility:info";
  }
}

/**
 * @description computes icon alternative text
 * @param {String} type 
 * @returns {String}
 */
export function computeIconAlternativeText(type = "base") {
  switch (type) {
    case "success":
      return "success";
    case "warning":
      return ":warning";
    case "error":
      return "error";
    case "base":
    case "informational":
    default:
      return "info";
  }
}

/**
 * @description computes icon variant
 * @param {String} type 
 * @returns {String}
 */
export function computeIconVariant(type = "base") {
  return type === "base" ? null : "inverse";
}

/**
 * @description check if slot has content
 * @param {*} evt
 * @returns {Boolean} true if slot has content
 */
 export function hasSlotContent(evt) {
  const slot = evt.target !== undefined ? evt.target : evt.currentTarget;
  const hasSlotContent =
    slot && (slot.innerText || slot.assignedElements().length > 0);
  return hasSlotContent;
}