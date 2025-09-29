import { forwardRef, type ComponentType } from "react"
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"
import { randomColor } from "https://framer.com/m/framer/utils.js@^0.9.0"

// Learn more: https://www.framer.com/developers/overrides/

const useStore = createStore({
    background: "#0099FF",
})

export function withRotate(Component): ComponentType {
    return forwardRef((props, ref) => {
        return (
            <Component
                ref={ref}
                {...props}
                animate={{ rotate: 90 }}
                transition={{ duration: 2 }}
            />
        )
    })
}

export function withHover(Component): ComponentType {
    return forwardRef((props, ref) => {
        return <Component ref={ref} {...props} whileHover={{ scale: 1.05 }} />
    })
}

export function withRandomColor(Component): ComponentType {
    return forwardRef((props, ref) => {
        const [store, setStore] = useStore()

        return (
            <Component
                ref={ref}
                {...props}
                animate={{
                    background: store.background,
                }}
                onClick={() => {
                    setStore({ background: randomColor() })
                }}
            />
        )
    })
}

// Feature Section 1: The Smarter Way to Communicate
export function SmarterWayFeature() {
    return (
        <section className="features-section-1">
            <div className="container">
                <h2 className="section-title-large">Speak Any Language. As If It Were Your Own.</h2>
                <p className="quote-style">"Locale is not just translation—it's freedom of speech, everywhere"</p>

                <div className="feature-block">
                    <div className="icon-header">
                        <span className="icon">💬</span>
                        <h3>The Smarter Way to Communicate</h3>
                    </div>
                    <p>Other translation tools give you literal words. Locale gives you true meaning—tone, context,
                        slang, and cultural nuance included.</p>
                    <div className="feature-list">
                        <ul>
                            <li>✔️ Natural, real-time voice translations</li>
                            <li>✔️ Works for meetings, travel, or daily chats</li>
                        </ul>
                        <ul>
                            <li>✔️ Adapts to your speaking style</li>
                            <li>✔️ Understands idioms & slang</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Feature Section 2: Built for Real Conversations
export function RealConversationsFeature() {
    return (
        <section className="features-section-2">
            <div className="container">
                <div className="feature-block">
                    <div className="icon-header">
                        <span className="icon">📱</span>
                        <h3>Built for Real Conversations</h3>
                    </div>
                    <p>150+ Languages: From English to Swahili to Arabic dialects</p>
                    <div className="feature-list">
                        <ul>
                            <li>✔️ Auto detection: Locale detects the slang through location or voice</li>
                            <li>✔️ Seamless Integration: Works effortlessly across all your devices</li>
                        </ul>
                        <ul>
                            <li>✔️ Privacy First: Your conversations stay yours</li>
                            <li>✔️ Offline Travel Mode: Translate anywhere, no internet needed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
