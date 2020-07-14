export const setEmailText = email => ({
    type: "AUTH_CHANGE_EMAIL_TEXT",
    payload: email
})
export const setPasswordText = password => ({
    type: "AUTH_CHANGE_PASSWORD_TEXT",
    payload: password
})