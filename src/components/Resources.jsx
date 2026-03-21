import {Link} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

const Resources = () => {
    return(
        <>
            <HeaderComponent></HeaderComponent>
            <div className="resources-safety-minimal">
                <p>Note: infomation listed here is taken from tinders <a href='https://policies.tinder.com/community-resources/safety-tips/intl/en/?lang=en' target="_blank">website.</a></p>
                <h1>Safety Tips</h1>
                <p>Meeting new people is exciting, but you should always be cautious when interacting with someone you don’t know. Use your best judgment and put your safety first, whether you’re sending your first message or meeting in-person. While you can’t control the actions of others, there are things you can do to help stay safe during your Tinder experience.</p>
                <h2>Online safety</h2>
                <ul>
                    <li>Never send money or share financial information</li>
                    <p>Never send money, whether it’s through wire transfer, banking service, or an app on your phone, even if the person claims to be in an emergency. It can be nearly impossible to reverse these transactions or trace where the money went. Don’t make investments or open accounts with someone you matched with or through services or websites they recommend. Never share information that could be used to access your financial accounts. If another user asks you for money, report it to us immediately. For tips on avoiding romance scams, check out some advice from the U.S Federal Trade Commission.</p>
                    <li>Protect your personal information</li>
                    <p>Never share personal information, such as your social security number, home or work address, or details about your daily routine (for example, that you go to a certain gym every Monday) with people you don’t know. If you’re a parent, limit the information that you share about your children on your profile and in early communications. Avoid sharing details such as images of your children, their names, where they go to school, or their ages or genders.</p>
                    <li>Stay on the platform</li>
                    <p>Keep conversations on the Tinder platform while you’re getting to know someone. Because exchanges on Tinder are subject to our Trust & Safety detections, users with bad intentions often try to move the conversation to text, messaging apps, email, or phone right away.</p>
                    <li>Be wary of long distance and overseas relationships</li>
                    <p>Watch out for scammers who claim to be from your country but stuck somewhere else, especially if they ask for financial help to return home. Don’t let a match talk you into investing or opening an account with a service or website they share. Be wary of anyone who will not meet in person or talk on a phone/video call—they may not be who they say they are. If someone is avoiding your questions or pushing for a serious relationship without meeting or getting to know you first, that’s a red flag.</p>
                    <li>Report all suspicious and offensive behavior</li>
                    <p>You know when someone’s crossed the line. And when they do, we want to know about it. Block and report anyone that violates our terms or your personal boundaries. Here are some examples of violations:</p>
                    <ul>
                        <li>Requests for money or donations</li>
                        <li>Underage users</li>
                        <li>Harassment, threats, and abusive messages</li>
                        <li>Inappropriate or harmful behavior during or after meeting in person</li>
                        <li>Fraudulent profiles</li>
                        <li>Spam or solicitation, including links to commercial websites or attempts to sell products or services</li>
                    </ul>
                </ul>
            </div>
        </>
    )
}

export default Resources