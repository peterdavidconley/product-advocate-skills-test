import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Peter Conley Product Advocate Application<h2>
        <p>
          1. Things a Product Advocate Might Do:
          Here are the things a product advocate at Vercel might do in no particular order. 
    
          List the 3 things you would be most interested in doing:

          • Create Salesforce reports to keep track of data pertinent to the team or your stats Hop on a Zoom call to do a product demo	
          • Research and organize notes to ensure Account Executives are prepared for calls
          • Write direct and concise emails that dig into a prospect's pain points and needs 
    
          3 you would be least interested in doing:
    
          • Evaluate OSS sponsorship applications
          • Evaluate an application to help determine if it's commercial or not
          • Attend weekly enablement meetings to level up your product and sales knowledge
         </p>
         <p>
          2. Reflection on past experience:	
    
          a. In your next role, what are you looking to learn or do more of?
	  
	  Become more technically advanced and a better writer.
							
          b. Which (non-Vercel) technical or sales article, guide or lightning talk left the biggest positive impression on you? Why? (and please provide             the link)
	
	  Scott Adam's "The Day You Became A Better Writer" - https://dilbertblog.typepad.com/the_dilbert_blog/2007/06/the_day_you_bec.html
			
         </p>
         <p>
         3. Using Next.js
  
         Add a temporary redirect to your Next/Vercel project
  
         I chose the "Create React App" template to use in order to answer these questions, and not Next.js, hence no redirect.
							
         Add a temporary in-app redirect to your project by redirecting /hello-vercel (or any path – but be sure to tell us which!) to https://vercel.com

         </p>
         <p>
    
          4. Practice Email Responses
          Please include one email response for each inquiry, just as if you were responding to a customer.
							
          Sales Inquiry: Do I need Enterprise?
          Subject: Sales Lead for barnesandnoble.com
          Name: Joe Fox
          Employees: 1000+
            
          How can we help you: New site launching soon using Next.js and we are thinking about using Vercel to host. I would like more information about             the Enterprise option.
	  
	  Hello Mr. Fox, 
	  
	  I'd be happy to assist you with this inquiry. It seems like your company is +1,000 employees and you're considering signing up for our Enterprise 	      product? Based on your companies size and the amount of traffic barnesandnoble.com gets the Enterprise option would be a great choice. The 	   dedicated support manager feature you'd get with that option would ensure quick fixes and top tier communication. Your database would built on 	    isolated infrastructure, ensuring it could handle high traffic and no issues would arise from other clients. 
	  
	  I would like to schedule a demo to show you how these features can help your business. What is your availibilty like this week?

          Sales Inquiry: Would Pro or Enterprise fit better for my team? 
          Subject: Sales Lead for hipcamp.com
          Name: Melissa Wright
          Employees: 10-100

          How can we help you: We are looking to re-platform our site and are considering Vercel. Would like to evaluate options to see if Pro or                   Enterprise would fit out needs better. Timeline is Q3. Can you help?
		  
	  Hello Melissa, 
		  
	  I would love to be able to help to find you the ideal solution by Q3, which is plenty of time. With our pro version, you have access to a 14-day 	     free trial via this link: https://vercel.com/signup?next=/dashboard?createTeam=true. If you'd like, I can also schedule a demo with you to 	  answer any questions you may have in real time. 
	  
	  Let's start with the Pro option, then if your needs seem greater than that, we can discuss and review the enterprise option. 
            
         </p>
         <p>
         							
          5. Your personal recommendations:
          When it comes to looking for a solution for hosting your Next.js site, what are some of the common things
	  you would value as the Engineering Manager for:
	  
          1. A mom and pop business?
		  
		  Ease of use, conveying messages to customers properly, robustness (least likely to break)
		  
          2. An NFT?
		  
		  Compatibility with multiple blockchains, APIs, and marketplaces to ensure greatest chance at sale.
		  
          3. A Marketing Page for a large corporation like Nintendo?
		  
		  SEO, Customization, and Analytics.

         </p>
      </header>
    </div>
  );
}

export default App;
