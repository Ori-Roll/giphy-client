const KB_STANDARD = 1024;

const FileSizeUnitsEnum = Object.freeze({
  BYTES: 'Bytes',
  KB: 'KB',
  MB: 'MB',
  GB: 'GB',
});

export const maxSizeToBytes = {
  [FileSizeUnitsEnum.BYTES]: (size: number) => size,
  [FileSizeUnitsEnum.KB]: (size: number) => size * KB_STANDARD,
  [FileSizeUnitsEnum.MB]: (size: number) => size * KB_STANDARD * KB_STANDARD,
  [FileSizeUnitsEnum.GB]: (size: number) =>
    size * KB_STANDARD * KB_STANDARD * KB_STANDARD,
};

export const formatBytes = (bytes?: number, decimals = 2) => {
  if (!bytes) return undefined;
  if (bytes === 0)
    return {
      fullString: '0 Bytes',
      sizeValue: 0,
      sizeUnit: FileSizeUnitsEnum.BYTES,
    };

  const k = KB_STANDARD;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes: (keyof typeof FileSizeUnitsEnum)[] = ['BYTES', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  const sizeValue = parseFloat((bytes / k ** i).toFixed(dm));
  const sizeUnit = sizes[i];

  return {
    fullString: `${sizeValue} ${sizeUnit}`,
    sizeValue,
    sizeUnit: FileSizeUnitsEnum[sizeUnit],
  };
};
