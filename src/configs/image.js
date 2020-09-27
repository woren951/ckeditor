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
        'imageResize'
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
            name: 'imageResize:original',
            value: null,
            icon: 'original'
        },
        {
            name: 'imageResize:75',
            value: '75',
            icon: 'large'
        },
        {
            name: 'imageResize:50',
            value: '50',
            icon: 'medium'
        }
    ],
};
