import React from 'react'
import NewJobForm from './NewJobForm'

/*
Your Company's Name *
Your Email Address *
Job Post Title *
Job Post Link or Email Address *
Tags (add any that apply)
TAGS, KEYWORDS OR STACK*
JOB IS RESTRICTED TO LOCATIONS?
COMPANY LOGO (.JPG OR .PNG, SQUARE OR ROUND)
ANNUAL SALARY OR COMPENSATION IN USD (GROSS, ANNUALIZED, FULL-TIME-EQUIVALENT
JOB DESCRIPTION*

COMPANY TWITTER

Posts without salary will automatically show an estimate of salary based on similar jobs.
Google does NOT index jobs without salary data

Need to get approval for this payment? Or send the invoice to your finance department first? No problem, we'll save your job post and send you (and your finance department below) a payment link. Once it's paid we immediately publish it!

****TODO Buy a jobs bundle
*/

function NewJob() {
    return (
        <NewJobForm />
    )
}

export default NewJob