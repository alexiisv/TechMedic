export function mapPerson (data) {
    return{
        name: data.firstName,
        number: data.id
    }
}