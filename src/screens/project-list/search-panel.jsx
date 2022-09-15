export const SearchPanel = (props) => {
    const { params, setParams, users } = props

    return <form action="">
        <input type="text" value={params.name} onChange={evt => setParams({
            ...params,
            name: evt.target.value
        })} />
        <select value={params.id} onChange={evt => setParams({
            ...params,
            id: evt.target.value
        })}>
            {
                users.map((item, index) => {
                    return <option value={item.id} key={item.id}>{item.name}</option>
                })
            }
        </select>
    </form>
}