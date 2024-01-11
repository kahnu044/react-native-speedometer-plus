// calculateDegreeFromLabels
export function calculateDegreeFromLabels(degree, labels) {
    return degree / labels.length;
  }

  // calculateLabelFromValue
  export function calculateLabelFromValue(value, labels, minValue, maxValue) {
    const currentValue = (value - minValue) / (maxValue - minValue);
    const currentIndex = Math.round((labels.length - 1) * currentValue);
    return labels[currentIndex];
  }

  // limitValue
  export function limitValue(value, minValue, maxValue, allowedDecimals) {
    let currentValue = 0;
    if (!isNaN(value)) {
      currentValue = isNaN(allowedDecimals) || allowedDecimals <= 0
        ? parseInt(value)
        : parseFloat(value).toFixed(Math.min(allowedDecimals, 4));
    }
    return Math.min(Math.max(currentValue, minValue), maxValue);
  }

  // validateSize
  export function validateSize(current, original) {
    return !isNaN(current) ? parseInt(current) : original;
  }
