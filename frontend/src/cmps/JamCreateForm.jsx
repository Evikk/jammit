

export function JamCreateForm({title, description}){
    return (
        <form className="form">
            <input type="text" placeholder="title" />
            <input type="text" placeholder="description"/>
        </form>
    )
}