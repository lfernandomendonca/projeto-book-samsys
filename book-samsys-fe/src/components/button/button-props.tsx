import { ButtonProps } from "reactstrap"

interface MyBtnProps extends ButtonProps {
    text: string
    color: string
    size: string
}
export default MyBtnProps;