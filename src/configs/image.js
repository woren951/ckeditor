export default {
    toolbar: [
        'imageStyle:full',
        'imageStyle:alignLeft',
        'imageStyle:alignRight',
        '|',
        'imageTextAlternative',
        '|',
        'linkImage',
        '|',
        'resizeImage'
    ],
    upload: {
        panel: {
            items: [ 'insertImageViaUrl' ]
        }
    },
    styles: [
        'full',
        'alignLeft',
        'alignRight'
    ],
    resizeOptions: [
        {
            name: 'resizeImage:original',
            value: null,
            icon: 'original'
        },
        {
            name: 'resizeImage:75',
            value: '75',
            icon: 'large'
        },
        {
            name: 'resizeImage:50',
            value: '50',
            icon: 'medium'
        }
    ],
};
