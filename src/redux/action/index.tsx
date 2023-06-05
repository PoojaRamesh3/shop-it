export const COUNTERDATA = "COUNTERDATA";

export function updateCounter(data: any) {
  return {
    type: COUNTERDATA,
    payload: data,
  };
}
