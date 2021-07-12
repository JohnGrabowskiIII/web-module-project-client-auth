// takes onChange handler as prop

const PasswordField = (props) => {

    const {value, change} = props;

    return (
        <label>
            Password:
            <input
            type='password'
            name='password'
            value={value}
            onChange={change}
            placeholder='School' />
        </label>
    )

}

export default PasswordField;