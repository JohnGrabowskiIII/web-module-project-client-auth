// takes onChange handler as prop

const UsernameField = (props) => {

    const {value, change} = props;

    return (
        <label>
            Username:
            <input
            type='text'
            name='username'
            value={value}
            onChange={change}
            placeholder='Lambda' />
        </label>
    )

}

export default UsernameField;