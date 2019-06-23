export const VALID_PASSWORD_RESTRICTIONS_1_RE = /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/
export const VALID_PASSWORD_RESTRICTIONS_2_RE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/
export const VALID_PASSWORD_RESTRICTIONS_3_RE = /^(?=.*\d).{4,8}$/
export const VALID_PASSWORD_RESTRICTIONS_4_RE = /^[a-zA-Z]\w{3,14}$/