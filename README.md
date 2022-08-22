# LWC Scoped Notification (ALPHA)

![sample](sample.png "sample")

## About

SLDS Scoped Notification Generic Component Developed because Salesforce doesn't provide a standard component.

## Features
- Native SLDS Style: https://www.lightningdesignsystem.com/components/scoped-notifications/
- Support all the SLDS variants
- Integrated on a single component (easy to copy to multiple projects)
- Supports function execution when clicking on a button
- Slot support


## Instructions

### Use on your project
Everything was developed in a single LWC, so you just need a new single component on your project.

- Copy the following files to your project:
    - force-app/main/default/lwc/lwcScopedNotification/**
- Call the component and pass the options
```
<c-lwc-scoped-notification message="It looks as if duplicates exist for this lead." link="#" link-message="View Duplicates"></c-lwc-scoped-notification>
```

### Testing and learn how to use it

- Run the `createorg.sh` to create a scratch org
- Open the `LWC Scoped Notification` lightning app
- Explore the code on the `samples` component
- Edit the page to preview on mobile devices or login with your mobile device (check the `password.env` file)



## References

https://www.lightningdesignsystem.com/components/scoped-notifications/

https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_components_css_slds_blueprint