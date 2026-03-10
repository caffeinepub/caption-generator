# Caption Generator

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Homepage with a caption generator tool
- Text input for user to describe their video/topic
- Template selector: Social Media, Funny, Formal, Promotional, Inspirational, Motivational, Travel, Food, Fitness, Business, YouTube, Reel/Short, Wedding, Festival, Sports, Fashion, Tech, Education, Nature, Quotes
- Language selector: English, Hindi, Spanish, French, German, Portuguese, Italian, Arabic, Japanese, Korean, Chinese, Russian, Bengali, Tamil, Telugu, Marathi, Gujarati, Punjabi, Urdu, Indonesian, Dutch, Turkish, Vietnamese, Thai
- Generate button that produces 3 caption variations based on template + input
- Each caption has a copy-to-clipboard button
- Character count shown per caption
- Hashtag suggestions included in captions
- Regenerate button to get new variations

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Backend: Store caption templates with placeholder patterns per category and language
2. Backend: generateCaptions(topic, template, language) returns 3 caption variants
3. Backend: getTemplates() returns list of available templates
4. Backend: getLanguages() returns list of supported languages
5. Frontend: Landing hero with tool description
6. Frontend: Input form (topic input, template select, language select)
7. Frontend: Generated captions display with copy buttons
8. Frontend: Hashtag display per caption
9. Frontend: Responsive layout
