export function getCourierByKey(key) {
    let courierDetails = {};
    switch(key) {
        case 'DHL':
            courierDetails.name = 'DHL';
            courierDetails.addredd ={
                street: '1st DHL Street'
            }
            break;

        case 'Hermes':
            courierDetails.name = 'Hermes';
            courierDetails.addredd ={
                street: '1st Hermes Street'
            }
            break;
    }
    return courierDetails;
}